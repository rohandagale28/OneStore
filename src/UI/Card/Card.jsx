import { Typography } from "../../Styled-Components/Typography"
import { Description } from "../../Styled-Components/Description"
import { Image } from "../../Styled-Components/Image"
import { Cards } from "../../Styled-Components/Card"


export const Card = (props) => {
    const { data } = props
    return (
        <Cards direction='column'>

            <Image src={data?.image} alt={data?.title} />

            <div>
                <Typography size='1rem'>{data?.title}</Typography>
            </div>
            <div>
                <Description size='0.8rem'>{data?.description}</Description>
            </div>
            <div>
                <Typography>starting from ₹ {data?.price} </Typography>
            </div>
        </Cards>
    )
}
