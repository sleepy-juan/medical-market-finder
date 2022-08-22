package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"khidi/x/khidi/types"
)

func (k Keeper) HyRecentExport(goCtx context.Context, req *types.QueryHyRecentExportRequest) (*types.QueryHyRecentExportResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	val, found := k.GetRecentHyExport(
		ctx,
		req.Name,
		req.Group,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryHyRecentExportResponse{Volume: val.Volume}, nil
}
