package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"khidi/x/khidi/types"

	"strconv"
)

// SetHyExport set a specific hyExport in the store from its index
func (k Keeper) SetHyExport(ctx sdk.Context, hyExport types.HyExport) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.HyExportKeyPrefix))
	b := k.cdc.MustMarshal(&hyExport)
	store.Set(types.HyExportKey(
		hyExport.Index,
	), b)
}

// GetHyExport returns a hyExport from its index
func (k Keeper) GetHyExport(
	ctx sdk.Context,
	index string,

) (val types.HyExport, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.HyExportKeyPrefix))

	b := store.Get(types.HyExportKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveHyExport removes a hyExport from the store
func (k Keeper) RemoveHyExport(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.HyExportKeyPrefix))
	store.Delete(types.HyExportKey(
		index,
	))
}

// GetAllHyExport returns all hyExport
func (k Keeper) GetAllHyExport(ctx sdk.Context) (list []types.HyExport) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.HyExportKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.HyExport
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// custom made
func (k Keeper) GetRecentHyExport(
	ctx sdk.Context,
	name string,
	group string,
) (val types.HyExport, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.HyExportKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	recentYear := -1
	var recentVal types.HyExport
	for ; iterator.Valid(); iterator.Next() {
		var val types.HyExport
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		if val.Name == name && val.Group == group {
			year, _ := strconv.Atoi(val.Year)
			if year > recentYear {
				recentYear = year
				recentVal = val
			}
		}
	}

	if recentYear == 0 {
		return val, false
	}
	return recentVal, true
}
