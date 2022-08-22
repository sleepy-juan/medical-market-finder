package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"khidi/x/khidi/types"
)

func (k Keeper) HyRecentMarketsize(goCtx context.Context, req *types.QueryHyRecentMarketsizeRequest) (*types.QueryHyRecentMarketsizeResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	val, found := k.GetRecentHyImport(
		ctx,
		req.Name,
		req.Group,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryHyRecentMarketsizeResponse{Volume: val.Volume}, nil
}
