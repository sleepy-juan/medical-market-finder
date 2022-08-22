package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgHyAddMarketsize = "hy_add_marketsize"

var _ sdk.Msg = &MsgHyAddMarketsize{}

func NewMsgHyAddMarketsize(creator string, name string, year string, group string, volume string) *MsgHyAddMarketsize {
	return &MsgHyAddMarketsize{
		Creator: creator,
		Name:    name,
		Year:    year,
		Group:   group,
		Volume:  volume,
	}
}

func (msg *MsgHyAddMarketsize) Route() string {
	return RouterKey
}

func (msg *MsgHyAddMarketsize) Type() string {
	return TypeMsgHyAddMarketsize
}

func (msg *MsgHyAddMarketsize) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgHyAddMarketsize) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgHyAddMarketsize) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
