package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"khidi/x/khidi/types"

	"strconv"
)

func (k Keeper) HyAllValuesOf(goCtx context.Context, req *types.QueryHyAllValuesOfRequest) (*types.QueryHyAllValuesOfResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	hyRecentMarketsize, isFound := k.GetRecentHyMarketsize(ctx, req.Name, req.Group)
	var recentMarketsize float64
	if isFound {
		recentMarketsize, _ = strconv.ParseFloat(hyRecentMarketsize.Volume, 64)
	} else {
		recentMarketsize = -1
	}

	hyRecentImport, isFound := k.GetRecentHyImport(ctx, req.Name, req.Group)
	var recentImport float64
	if isFound {
		recentImport, _ = strconv.ParseFloat(hyRecentImport.Volume, 64)
	} else {
		recentImport = -1
	}

	hyRecentExport, isFound := k.GetRecentHyExport(ctx, req.Name, req.Group)
	var recentExport float64
	if isFound {
		recentExport, _ = strconv.ParseFloat(hyRecentExport.Volume, 64)
	} else {
		recentExport = -1
	}

	domesticMarketShare := k.ComputeDomesticMarketShare(ctx, req.Name, req.Group)
	competition := k.ComputeCompetition(ctx, req.Name, req.Group)
	tradeDependency := k.ComputeTradeDependency(ctx, req.Name, req.Group)
	quality := k.ComputeQuality(ctx, req.Name, req.Group)
	protectionism := k.ComputeProtectionism(ctx, req.Name, req.Group)
	success := k.ComputeSuccess(ctx, req.Name, req.Group)

	return &types.QueryHyAllValuesOfResponse{
		RecentMarketsize:    strconv.FormatFloat(recentMarketsize, 'f', -1, 64),
		RecentImport:        strconv.FormatFloat(recentImport, 'f', -1, 64),
		RecentExport:        strconv.FormatFloat(recentExport, 'f', -1, 64),
		DomesticMarketShare: strconv.FormatFloat(domesticMarketShare, 'f', -1, 64),
		Competition:         strconv.FormatFloat(competition, 'f', -1, 64),
		TradeDependency:     strconv.FormatFloat(tradeDependency, 'f', -1, 64),
		Quality:             strconv.FormatFloat(quality, 'f', -1, 64),
		Protectionism:       strconv.FormatFloat(protectionism, 'f', -1, 64),
		Success:             strconv.FormatFloat(success, 'f', -1, 64),
	}, nil
}
