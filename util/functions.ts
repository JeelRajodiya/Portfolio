export function myToast(
	title: string,
	description: string,
	status: string,
	toast: any
) {
	toast({
		title,
		description,
		status,
		duration: 3000,
		isClosable: true,
	});
}
