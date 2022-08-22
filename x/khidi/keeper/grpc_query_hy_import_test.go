package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "khidi/testutil/keeper"
	"khidi/testutil/nullify"
	"khidi/x/khidi/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestHyImportQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.KhidiKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNHyImport(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetHyImportRequest
		response *types.QueryGetHyImportResponse
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetHyImportRequest{
				Index: msgs[0].Index,
			},
			response: &types.QueryGetHyImportResponse{HyImport: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetHyImportRequest{
				Index: msgs[1].Index,
			},
			response: &types.QueryGetHyImportResponse{HyImport: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetHyImportRequest{
				Index: strconv.Itoa(100000),
			},
			err: status.Error(codes.NotFound, "not found"),
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.HyImport(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				require.Equal(t,
					nullify.Fill(tc.response),
					nullify.Fill(response),
				)
			}
		})
	}
}

func TestHyImportQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.KhidiKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNHyImport(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllHyImportRequest {
		return &types.QueryAllHyImportRequest{
			Pagination: &query.PageRequest{
				Key:        next,
				Offset:     offset,
				Limit:      limit,
				CountTotal: total,
			},
		}
	}
	t.Run("ByOffset", func(t *testing.T) {
		step := 2
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.HyImportAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.HyImport), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.HyImport),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.HyImportAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.HyImport), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.HyImport),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.HyImportAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.HyImport),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.HyImportAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
