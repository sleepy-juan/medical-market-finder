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

func createNHyExport(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.HyExport {
	items := make([]types.HyExport, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetHyExport(ctx, items[i])
	}
	return items
}

func TestHyExportGet(t *testing.T) {
	keeper, ctx := keepertest.KhidiKeeper(t)
	items := createNHyExport(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetHyExport(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestHyExportRemove(t *testing.T) {
	keeper, ctx := keepertest.KhidiKeeper(t)
	items := createNHyExport(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveHyExport(ctx,
			item.Index,
		)
		_, found := keeper.GetHyExport(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestHyExportGetAll(t *testing.T) {
	keeper, ctx := keepertest.KhidiKeeper(t)
	items := createNHyExport(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllHyExport(ctx)),
	)
}
