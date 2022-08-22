package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
	"khidi/x/khidi/types"
)

var _ = strconv.Itoa(0)

func CmdHyAllValuesOf() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "hy-all-values-of [name] [group]",
		Short: "Query hy-all-values-of",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			reqName := args[0]
			reqGroup := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryHyAllValuesOfRequest{

				Name:  reqName,
				Group: reqGroup,
			}

			res, err := queryClient.HyAllValuesOf(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
