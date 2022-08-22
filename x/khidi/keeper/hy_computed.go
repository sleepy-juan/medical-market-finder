package keeper

import (
	sdk "github.com/cosmos/cosmos-sdk/types"

	"strconv"
)

// custom made
func (k Keeper) ComputeDomesticMarketShare(
	ctx sdk.Context,
	name string,
	group string,
) (val float64) {
	// Trade Balance
	hyExport, isFound := k.GetRecentHyExport(ctx, name, group)
	if !isFound {
		return -1
	}

	hyImport, isFound := k.GetRecentHyImport(ctx, name, group)
	if !isFound {
		return -1
	}

	exportVolume, _ := strconv.ParseFloat(hyExport.Volume, 64)
	importVolume, _ := strconv.ParseFloat(hyImport.Volume, 64)

	tradeBalance := exportVolume - importVolume

	// Market Size
	hyMarketsize, isFound := k.GetRecentHyMarketsize(ctx, name, group)
	if !isFound {
		return -1
	}

	marketsizeVolume, _ := strconv.ParseFloat(hyMarketsize.Volume, 64)

	// Domestic Market Share
	domesticMarketShare := (marketsizeVolume + tradeBalance) / marketsizeVolume

	return domesticMarketShare
}

func (k Keeper) ComputeCompetition(
	ctx sdk.Context,
	name string,
	group string,
) (val float64) {
	// Partners
	partners := k.GetAllHyPartnerWithBuyer(ctx, name)

	var num float64
	var denom float64

	for _, partner := range partners {
		proportion, _ := strconv.ParseFloat(partner.Proportion, 64)

		hyMarketsize, isFound := k.GetRecentHyMarketsize(ctx, name, group)
		if !isFound {
			continue
		}

		marketsize, _ := strconv.ParseFloat(hyMarketsize.Volume, 64)

		num += (proportion * marketsize)
		denom += proportion
	}

	if denom == 0 {
		return -1
	}
	return num / denom
}

func (k Keeper) ComputeTradeDependency(
	ctx sdk.Context,
	name string,
	group string,
) (val float64) {
	// Marketsize
	hyMarketsize, isFound := k.GetRecentHyMarketsize(ctx, name, group)
	if !isFound {
		return -1
	}

	// Import
	hyImport, isFound := k.GetRecentHyImport(ctx, name, group)
	if !isFound {
		return -1
	}

	marketsize, _ := strconv.ParseFloat(hyMarketsize.Volume, 64)
	importVolume, _ := strconv.ParseFloat(hyImport.Volume, 64)

	return importVolume / marketsize
}

func (k Keeper) ComputeQuality(
	ctx sdk.Context,
	name string,
	group string,
) (val float64) {
	hyExport, isFound := k.GetRecentHyExport(ctx, name, group)
	if !isFound {
		return -1
	}

	exportVolume, _ := strconv.ParseFloat(hyExport.Volume, 64)
	return exportVolume
}

func (k Keeper) ComputeProtectionism(
	ctx sdk.Context,
	name string,
	group string,
) (val float64) {
	domesticMarketShare := k.ComputeDomesticMarketShare(ctx, name, group)
	if domesticMarketShare == -1 {
		return -1
	}

	quality := k.ComputeQuality(ctx, name, group)
	if quality == -1 {
		return -1
	}

	return domesticMarketShare / quality
}

func (k Keeper) ComputeSuccess(
	ctx sdk.Context,
	name string,
	group string,
) (val float64) {
	tradeDependency := k.ComputeTradeDependency(ctx, name, group)
	if tradeDependency == -1 {
		return -1
	}

	competition := k.ComputeCompetition(ctx, name, group)
	if competition == -1 {
		return -1
	}

	quality := k.ComputeQuality(ctx, name, group)
	if quality == -1 {
		return -1
	}

	protectionism := k.ComputeProtectionism(ctx, name, group)
	if protectionism == -1 {
		return -1
	}

	return tradeDependency / competition / quality / protectionism
}