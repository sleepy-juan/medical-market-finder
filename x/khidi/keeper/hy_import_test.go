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

func createNHyImport(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.HyImport {
	items := make([]types.HyImport, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetHyImport(ctx, items[i])
	}
	return items
}

func TestHyImportGet(t *testing.T) {
	keeper, ctx := keepertest.KhidiKeeper(t)
	items := createNHyImport(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetHyImport(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestHyImportRemove(t *testing.T) {
	keeper, ctx := keepertest.KhidiKeeper(t)
	items := createNHyImport(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveHyImport(ctx,
			item.Index,
		)
		_, found := keeper.GetHyImport(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestHyImportGetAll(t *testing.T) {
	keeper, ctx := keepertest.KhidiKeeper(t)
	items := createNHyImport(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllHyImport(ctx)),
	)
}
