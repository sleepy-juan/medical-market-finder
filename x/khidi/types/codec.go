package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgHyAddMarketsize{}, "khidi/HyAddMarketsize", nil)
	cdc.RegisterConcrete(&MsgHyAddPartner{}, "khidi/HyAddPartner", nil)
	cdc.RegisterConcrete(&MsgHyAddImport{}, "khidi/HyAddImport", nil)
	cdc.RegisterConcrete(&MsgHyAddExport{}, "khidi/HyAddExport", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgHyAddMarketsize{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgHyAddPartner{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgHyAddImport{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgHyAddExport{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
