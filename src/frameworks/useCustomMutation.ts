import { useMutation } from "@tanstack/react-query";
import { MutationAdapter } from "./adapters/mutationAdapters";

export function useCustomMutation<Args, Result>(
	mutationFn: (args: Args) => Promise<Result>
): MutationAdapter<Args, Result> {
	const { mutateAsync, isPending } = useMutation({
		mutationFn,
	});

	return {
		mutate: mutateAsync,
		isPending: isPending,
	};
}
