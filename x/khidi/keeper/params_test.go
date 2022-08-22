package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	testkeeper "khidi/testutil/keeper"
	"khidi/x/khidi/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.KhidiKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
