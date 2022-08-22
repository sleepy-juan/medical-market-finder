package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
	"khidi/x/khidi/types"
)

func CmdListHyMarketsize() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-hy-marketsize",
		Short: "list all hy-marketsize",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllHyMarketsizeRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.HyMarketsizeAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddPaginationFlagsToCmd(cmd, cmd.Use)
	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowHyMarketsize() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-hy-marketsize [index]",
		Short: "shows a hy-marketsize",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argIndex := args[0]

			params := &types.QueryGetHyMarketsizeRequest{
				Index: argIndex,
			}

			res, err := queryClient.HyMarketsize(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
