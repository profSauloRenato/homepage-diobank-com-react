import { Button } from "@chakra-ui/react"
import { login } from "../services/login"

interface IButton {
    event: () => {}
}

export const LButton = () => {
    return(
        <Button
          onClick={login}
        >
          Entrar
        </Button>
    )
}

export default LButton