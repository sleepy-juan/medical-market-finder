package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"khidi/x/khidi/types"

	"strconv"
)

// SetHyImport set a specific hyImport in the store from its index
func (k Keeper) SetHyImport(ctx sdk.Context, hyImport types.HyImport) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.HyImportKeyPrefix))
	b := k.cdc.MustMarshal(&hyImport)
	store.Set(types.HyImportKey(
		hyImport.Index,
	), b)
}

// GetHyImport returns a hyImport from its index
func (k Keeper) GetHyImport(
	ctx sdk.Context,
	index string,

) (val types.HyImport, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.HyImportKeyPrefix))

	b := store.Get(types.HyImportKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveHyImport removes a hyImport from the store
func (k Keeper) RemoveHyImport(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.HyImportKeyPrefix))
	store.Delete(types.HyImportKey(
		index,
	))
}

// GetAllHyImport returns all hyImport
func (k Keeper) GetAllHyImport(ctx sdk.Context) (list []types.HyImport) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.HyImportKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.HyImport
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// custom made
func (k Keeper) GetRecentHyImport(
	ctx sdk.Context,
	name string,
	group string,
) (val types.HyImport, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.HyImportKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	recentYear := -1
	var recentVal types.HyImport
	for ; iterator.Valid(); iterator.Next() {
		var val types.HyImport
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
