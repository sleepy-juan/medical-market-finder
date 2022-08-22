package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"khidi/x/khidi/types"

	"strconv"
)

func (k Keeper) HyAllNamesOf(goCtx context.Context, req *types.QueryHyAllNamesOfRequest) (*types.QueryHyAllNamesOfResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	uniqueNames := k.ComputeAllUniqueNames(ctx)
	var list []*types.HyAllNamesOf
	for _, name := range uniqueNames {
		hyRecentMarketsize, isFound := k.GetRecentHyMarketsize(ctx, name, req.Group)
		var recentMarketsize float64
		if isFound {
			recentMarketsize, _ = strconv.ParseFloat(hyRecentMarketsize.Volume, 64)
		} else {
			recentMarketsize = -1
		}

		hyRecentImport, isFound := k.GetRecentHyImport(ctx, name, req.Group)
		var recentImport float64
		if isFound {
			recentImport, _ = strconv.ParseFloat(hyRecentImport.Volume, 64)
		} else {
			recentImport = -1
		}

		hyRecentExport, isFound := k.GetRecentHyExport(ctx, name, req.Group)
		var recentExport float64
		if isFound {
			recentExport, _ = strconv.ParseFloat(hyRecentExport.Volume, 64)
		} else {
			recentExport = -1
		}

		domesticMarketShare := k.ComputeDomesticMarketShare(ctx, name, req.Group)
		competition := k.ComputeCompetition(ctx, name, req.Group)
		tradeDependency := k.ComputeTradeDependency(ctx, name, req.Group)
		quality := k.ComputeQuality(ctx, name, req.Group)
		protectionism := k.ComputeProtectionism(ctx, name, req.Group)
		success := k.ComputeSuccess(ctx, name, req.Group)

		result := types.HyAllNamesOf{
			Name: name,
			RecentMarketsize:    strconv.FormatFloat(recentMarketsize, 'f', -1, 64),
			RecentImport:        strconv.FormatFloat(recentImport, 'f', -1, 64),
			RecentExport:        strconv.FormatFloat(recentExport, 'f', -1, 64),
			DomesticMarketShare: strconv.FormatFloat(domesticMarketShare, 'f', -1, 64),
			Competition:         strconv.FormatFloat(competition, 'f', -1, 64),
			TradeDependency:     strconv.FormatFloat(tradeDependency, 'f', -1, 64),
			Quality:             strconv.FormatFloat(quality, 'f', -1, 64),
			Protectionism:       strconv.FormatFloat(protectionism, 'f', -1, 64),
			Success:             strconv.FormatFloat(success, 'f', -1, 64),
		}

		list = append(list, &result)
	}

	return &types.QueryHyAllNamesOfResponse{HyAllNamesOf: list}, nil
}
