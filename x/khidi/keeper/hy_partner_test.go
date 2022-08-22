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

func createNHyPartner(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.HyPartner {
	items := make([]types.HyPartner, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetHyPartner(ctx, items[i])
	}
	return items
}

func TestHyPartnerGet(t *testing.T) {
	keeper, ctx := keepertest.KhidiKeeper(t)
	items := createNHyPartner(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetHyPartner(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestHyPartnerRemove(t *testing.T) {
	keeper, ctx := keepertest.KhidiKeeper(t)
	items := createNHyPartner(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveHyPartner(ctx,
			item.Index,
		)
		_, found := keeper.GetHyPartner(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestHyPartnerGetAll(t *testing.T) {
	keeper, ctx := keepertest.KhidiKeeper(t)
	items := createNHyPartner(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllHyPartner(ctx)),
	)
}
