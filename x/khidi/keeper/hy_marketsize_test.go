package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	keepertest "khidi/testutil/keeper"
	"khidi/testutil/nullify"
	"khidi/x/khidi/keeper"
	"khidi/x/khidi/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNHyMarketsize(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.HyMarketsize {
	items := make([]types.HyMarketsize, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetHyMarketsize(ctx, items[i])
	}
	return items
}

func TestHyMarketsizeGet(t *testing.T) {
	keeper, ctx := keepertest.KhidiKeeper(t)
	items := createNHyMarketsize(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetHyMarketsize(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestHyMarketsizeRemove(t *testing.T) {
	keeper, ctx := keepertest.KhidiKeeper(t)
	items := createNHyMarketsize(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveHyMarketsize(ctx,
			item.Index,
		)
		_, found := keeper.GetHyMarketsize(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestHyMarketsizeGetAll(t *testing.T) {
	keeper, ctx := keepertest.KhidiKeeper(t)
	items := createNHyMarketsize(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllHyMarketsize(ctx)),
	)
}
