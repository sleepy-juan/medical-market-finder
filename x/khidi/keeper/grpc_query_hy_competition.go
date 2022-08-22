package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"khidi/x/khidi/types"

	"strconv"
)

func (k Keeper) HyCompetition(goCtx context.Context, req *types.QueryHyCompetitionRequest) (*types.QueryHyCompetitionResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	val := k.ComputeCompetition(ctx, req.Name, req.Group)
	if val == -1 {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryHyCompetitionResponse{Value: strconv.FormatFloat(val, 'f', -1, 64)}, nil
}
