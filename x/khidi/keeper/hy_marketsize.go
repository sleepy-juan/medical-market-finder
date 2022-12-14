package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"khidi/x/khidi/types"

	"strconv"
)

// SetHyMarketsize set a specific hyMarketsize in the store from its index
func (k Keeper) SetHyMarketsize(ctx sdk.Context, hyMarketsize types.HyMarketsize) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.HyMarketsizeKeyPrefix))
	b := k.cdc.MustMarshal(&hyMarketsize)
	store.Set(types.HyMarketsizeKey(
		hyMarketsize.Index,
	), b)
}

// GetHyMarketsize returns a hyMarketsize from its index
func (k Keeper) GetHyMarketsize(
	ctx sdk.Context,
	index string,

) (val types.HyMarketsize, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.HyMarketsizeKeyPrefix))

	b := store.Get(types.HyMarketsizeKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveHyMarketsize removes a hyMarketsize from the store
func (k Keeper) RemoveHyMarketsize(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.HyMarketsizeKeyPrefix))
	store.Delete(types.HyMarketsizeKey(
		index,
	))
}

// GetAllHyMarketsize returns all hyMarketsize
func (k Keeper) GetAllHyMarketsize(ctx sdk.Context) (list []types.HyMarketsize) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.HyMarketsizeKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.HyMarketsize
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// custom made
func (k Keeper) GetRecentHyMarketsize(
	ctx sdk.Context,
	name string,
	group string,
) (val types.HyMarketsize, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.HyMarketsizeKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	recentYear := -1
	var recentVal types.HyMarketsize
	for ; iterator.Valid(); iterator.Next() {
		var val types.HyMarketsize
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		if val.Name == name && val.Group == group {
			year, _ := strconv.Atoi(val.Year)
			if year > recentYear {
				recentYear = year
				recentVal = val
			}
		}
	}

	if recentYear == -1 {
		return val, false
	}
	return recentVal, true
}

func (k Keeper) ComputeAllUniqueNames(ctx sdk.Context) (list []string) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.HyMarketsizeKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.HyMarketsize
		k.cdc.MustUnmarshal(iterator.Value(), &val)

		contains := false
		for _, name := range list {
			if name == val.Name {
				contains = true
				break
			}
		}
		if !contains {
			list = append(list, val.Name)
		}
	}

	return
}