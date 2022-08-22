package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"khidi/x/khidi/types"
)

func (k Keeper) HyPartnerAll(c context.Context, req *types.QueryAllHyPartnerRequest) (*types.QueryAllHyPartnerResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var hyPartners []types.HyPartner
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	hyPartnerStore := prefix.NewStore(store, types.KeyPrefix(types.HyPartnerKeyPrefix))

	pageRes, err := query.Paginate(hyPartnerStore, req.Pagination, func(key []byte, value []byte) error {
		var hyPartner types.HyPartner
		if err := k.cdc.Unmarshal(value, &hyPartner); err != nil {
			return err
		}

		hyPartners = append(hyPartners, hyPartner)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllHyPartnerResponse{HyPartner: hyPartners, Pagination: pageRes}, nil
}

func (k Keeper) HyPartner(c context.Context, req *types.QueryGetHyPartnerRequest) (*types.QueryGetHyPartnerResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetHyPartner(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetHyPartnerResponse{HyPartner: val}, nil
}
