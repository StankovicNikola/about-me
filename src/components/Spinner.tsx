import { ClipLoader } from "react-spinners";

interface SpinnerProps {
	loading: boolean;
}

const override = {
	display: "block",
	margin: "100px auto",
};

const Spinner = ({ loading }: SpinnerProps) => {
	return <ClipLoader color='#4B5563' loading={loading} cssOverride={override} size={150} />;
};

export default Spinner;
