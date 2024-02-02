import useSWR from "swr";

// @ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export function useViews() {
	const { data, error, isLoading } = useSWR("/api/view", fetcher);
	return { viewsData: data, error, isLoading };
}
