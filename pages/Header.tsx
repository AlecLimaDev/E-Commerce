import {
    Navigation,
    Logo,
    SubLogo,
    ButtonContainerNavigation,
    NavigationButton,
} from '@/styles/style'

import { FaCartPlus } from "react-icons/fa";



const Header = () => {
    return (
        <>
            <Navigation>
                <Logo>
                    EMPRESA
                    <SubLogo>
                        Anônima
                    </SubLogo>
                </Logo>

                <ButtonContainerNavigation>
                    <NavigationButton>
                        <FaCartPlus />
                    </NavigationButton>
                </ButtonContainerNavigation>
            </Navigation>
        </>
    )
}

export default Header