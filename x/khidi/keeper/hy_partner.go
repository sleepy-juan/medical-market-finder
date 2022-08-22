package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"khidi/x/khidi/types"

	"strconv"
)

// SetHyPartner set a specific hyPartner in the store from its index
func (k Keeper) SetHyPartner(ctx sdk.Context, hyPartner types.HyPartner) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.HyPartnerKeyPrefix))
	b := k.cdc.MustMarshal(&hyPartner)
	store.Set(types.HyPartnerKey(
		hyPartner.Index,
	), b)
}

// GetHyPartner returns a hyPartner from its index
func (k Keeper) GetHyPartner(
	ctx sdk.Context,
	index string,

) (val types.HyPartner, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.HyPartnerKeyPrefix))

	b := store.Get(types.HyPartnerKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveHyPartner removes a hyPartner from the store
func (k Keeper) RemoveHyPartner(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.HyPartnerKeyPrefix))
	store.Delete(types.HyPartnerKey(
		index,
	))
}

// GetAllHyPartner returns all hyPartner
func (k Keeper) GetAllHyPartner(ctx sdk.Context) (list []types.HyPartner) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.HyPartnerKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.HyPartner
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// custom made
func (k Keeper) GetAllHyPartnerWithBuyer(ctx sdk.Context, buyer string) (list []types.HyPartner) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.HyPartnerKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.HyPartner
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		if val.Buyer == buyer {
			list = append(list, val)
		}
	}

	return
}

func (k Keeper) GetRecentHyPartner(
	ctx sdk.Context,
	buyer string,
	seller string,
) (val types.HyPartner, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.HyPartnerKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	recentYear := -1
	var recentVal types.HyPartner
	for ; iterator.Valid(); iterator.Next() {
		var val types.HyPartner
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		if val.Buyer == buyer && val.Seller == seller {
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
