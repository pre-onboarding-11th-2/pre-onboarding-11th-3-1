import { StyledLoading, StyledSpinner } from "../styles/components";

type LoadingProps = {
  visible: boolean;
};

const Loading = ({ visible }: LoadingProps) => {
  return (
    <StyledLoading $visible={visible}>
      <StyledSpinner />
    </StyledLoading>
  );
};

export default Loading;
