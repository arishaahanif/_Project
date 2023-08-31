import { Container, Row, Col } from "react-bootstrap"

const arr = [{
    heading: ' Student-friendly pricing',
    para: 'Our services come with a realistic price of $11 per page. Play around with the calculator on our main page to see the final price and skip the stressful price-avoiding situations.'
},
{
    heading: ' Student-friendly pricing',
    para: 'Our services come with a realistic price of $11 per page. Play around with the calculator on our main page to see the final price and skip the stressful price-avoiding situations.'
},
{
    heading: ' Student-friendly pricing',
    para: 'Our services come with a realistic price of $11 per page. Play around with the calculator on our main page to see the final price and skip the stressful price-avoiding situations.'
},
{
    heading: ' Student-friendly pricing',
    para: 'Our services come with a realistic price of $11 per page. Play around with the calculator on our main page to see the final price and skip the stressful price-avoiding situations.'
},
{
    heading: ' Student-friendly pricing',
    para: 'Our services come with a realistic price of $11 per page. Play around with the calculator on our main page to see the final price and skip the stressful price-avoiding situations.'
},
{
    heading: ' Student-friendly pricing',
    para: 'Our services come with a realistic price of $11 per page. Play around with the calculator on our main page to see the final price and skip the stressful price-avoiding situations.'
},
    
]
const Services = () => {
    return (

        <div className="main_service">
            <h1 className="more">
                We’ll provide essay services and more

            </h1>
            <Container>
                <Row>
                    {arr.map((item, index) => {
                        return (
                            <Col lg={4}>
                                <div className="student">

                                    <h3 className="pricing">
                                        {item.heading}
                                    </h3>
                                    <p className="student_service">
                                        {item.para}                 </p>
                                </div>
                            </Col>
                        )

                    })}

                </Row>
            </Container>
        </div>
    )
}
export default Services