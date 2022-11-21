import React from "react"
import PropTypes from 'prop-types'


type Props = {
    logo: string
    phone: string
    message: string //¡Hola! estoy interesada en las siguientes prendas por WhatsApp.
}

const WhatsappButton = ({ logo, phone, message }: Props) => {
    const formattedMessage = message.replace(/ /g, "%20")

    return <>
        <div className="fixed bottom-2 right-2 flex flexColumn">
            <a
                href={`https://wa.me/${phone}?text=${formattedMessage}`}
                target="_blank"
                rel="noreferrer noopener"
            >
                <img src={logo} alt="Logo de WhatsApp" />


            </a>
        </div>
    </>
}

WhatsappButton.propTypes = {
    logo: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    message: PropTypes.string,
}

WhatsappButton.defaultProps = {
    logo: "mi-logo.png",
    phone: "3006457890",
    message: "¡Hola! estoy interesada en las siguientes prendas por WhatsApp."
}

WhatsappButton.schema = {
    title: "Botón de WhatsApp",
    type: "object",
    properties: {
        logo: {
            title: "Logo de WhatsApp que se relacione con la marca",
            type: "string",
            widget: {
                "ui.widget": "image-uploader"
            }

        },
        phone: {
            title: "Teléfono",
            description: "Agrega por favor el número de teléfono",
            type: "string"
        },
        message: {
            title: "Mensaje",
            description: "Agrega por favor el mensaje que verá tu cliente",
            type: "string",
            widget: {
                "ui.widget": "textarea"
            }
        },

    }
}

export default WhatsappButton;