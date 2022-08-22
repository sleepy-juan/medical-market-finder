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

func (k Keeper) HyExportAll(c context.Context, req *types.QueryAllHyExportRequest) (*types.QueryAllHyExportResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var hyExports []types.HyExport
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	hyExportStore := prefix.NewStore(store, types.KeyPrefix(types.HyExportKeyPrefix))

	pageRes, err := query.Paginate(hyExportStore, req.Pagination, func(key []byte, value []byte) error {
		var hyExport types.HyExport
		if err := k.cdc.Unmarshal(value, &hyExport); err != nil {
			return err
		}

		hyExports = append(hyExports, hyExport)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllHyExportResponse{HyExport: hyExports, Pagination: pageRes}, nil
}

func (k Keeper) HyExport(c context.Context, req *types.QueryGetHyExportRequest) (*types.QueryGetHyExportResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetHyExport(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetHyExportResponse{HyExport: val}, nil
}