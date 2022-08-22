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

func (k Keeper) HyImportAll(c context.Context, req *types.QueryAllHyImportRequest) (*types.QueryAllHyImportResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var hyImports []types.HyImport
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	hyImportStore := prefix.NewStore(store, types.KeyPrefix(types.HyImportKeyPrefix))

	pageRes, err := query.Paginate(hyImportStore, req.Pagination, func(key []byte, value []byte) error {
		var hyImport types.HyImport
		if err := k.cdc.Unmarshal(value, &hyImport); err != nil {
			return err
		}

		hyImports = append(hyImports, hyImport)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllHyImportResponse{HyImport: hyImports, Pagination: pageRes}, nil
}

func (k Keeper) HyImport(c context.Context, req *types.QueryGetHyImportRequest) (*types.QueryGetHyImportResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetHyImport(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetHyImportResponse{HyImport: val}, nil
}
