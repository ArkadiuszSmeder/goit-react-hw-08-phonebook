import { RotatingLines } from 'react-loader-spinner'
import { LoaderContainer } from 'styled/styled-loader'

export const Loader = () => {
    return(
        <LoaderContainer>
            <RotatingLines
            height="100"
            width="100"
            color="##00bfff"
            ariaLabel="audio-loading"
            wrapperStyle={{}}
            wrapperClass="wrapper-class"
            visible={true}
            />
        </LoaderContainer>
    )
}
