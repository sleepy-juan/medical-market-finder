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

func (k Keeper) HyMarketsizeAll(c context.Context, req *types.QueryAllHyMarketsizeRequest) (*types.QueryAllHyMarketsizeResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var hyMarketsizes []types.HyMarketsize
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	hyMarketsizeStore := prefix.NewStore(store, types.KeyPrefix(types.HyMarketsizeKeyPrefix))

	pageRes, err := query.Paginate(hyMarketsizeStore, req.Pagination, func(key []byte, value []byte) error {
		var hyMarketsize types.HyMarketsize
		if err := k.cdc.Unmarshal(value, &hyMarketsize); err != nil {
			return err
		}

		hyMarketsizes = append(hyMarketsizes, hyMarketsize)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllHyMarketsizeResponse{HyMarketsize: hyMarketsizes, Pagination: pageRes}, nil
}

func (k Keeper) HyMarketsize(c context.Context, req *types.QueryGetHyMarketsizeRequest) (*types.QueryGetHyMarketsizeResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetHyMarketsize(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetHyMarketsizeResponse{HyMarketsize: val}, nil
}
