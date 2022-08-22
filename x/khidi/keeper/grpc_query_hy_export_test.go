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

func TestHyExportQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.KhidiKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNHyExport(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetHyExportRequest
		response *types.QueryGetHyExportResponse
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetHyExportRequest{
				Index: msgs[0].Index,
			},
			response: &types.QueryGetHyExportResponse{HyExport: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetHyExportRequest{
				Index: msgs[1].Index,
			},
			response: &types.QueryGetHyExportResponse{HyExport: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetHyExportRequest{
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
			response, err := keeper.HyExport(wctx, tc.request)
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

func TestHyExportQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.KhidiKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNHyExport(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllHyExportRequest {
		return &types.QueryAllHyExportRequest{
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
			resp, err := keeper.HyExportAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.HyExport), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.HyExport),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.HyExportAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.HyExport), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.HyExport),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.HyExportAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.HyExport),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.HyExportAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
