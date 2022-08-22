package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"khidi/x/khidi/types"
)

func (k Keeper) HyRecentPartner(goCtx context.Context, req *types.QueryHyRecentPartnerRequest) (*types.QueryHyRecentPartnerResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	val, found := k.GetRecentHyImport(
		ctx,
		req.Buyer,
		req.Seller,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryHyRecentPartnerResponse{Volume: val.Volume}, nil
}
