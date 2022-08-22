package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"khidi/x/khidi/types"
)

var _ = strconv.Itoa(0)

func CmdHyAddImport() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "hy-add-import [name] [year] [group] [volume]",
		Short: "Broadcast message hy-add-import",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argName := args[0]
			argYear := args[1]
			argGroup := args[2]
			argVolume := args[3]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgHyAddImport(
				clientCtx.GetFromAddress().String(),
				argName,
				argYear,
				argGroup,
				argVolume,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
