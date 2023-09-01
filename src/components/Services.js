import { Container, Row, Col } from "react-bootstrap";
import { Widget, Quick, Zone, Quality, Task, Policy } from "./SVG"

const arr = [{
    heading: ' Student-friendly pricing',
    text: 'Our services come with a realistic price of $11 per page. Play around with the calculator on our main page to see the final price and skip the stressful price-avoiding situations.',
    widget: Widget
},
{
    heading: ' Quick delivery',
    text: 'Have your work ready in a matter of 6 hours. Can you write my essay for me in advance? Most definitely. Just use the double-deadline option.',
    widget: Quick
},
{
    heading: ' Plagiarism-free zone',
    text: 'Our essay writers online create original content and stay far away from plagiarism. To see for yourself, order a free originality report along with your order.',
    widget: Zone

},
{
    heading: ' 10/10 quality',
    text: 'Experts working for our professional essay writing service come from the US and Canada and are highly qualified, with years of experience and education.',
    widget: Quality

},
{
    heading: 'Order literally anything',
    text: ' Let EssayHub take care of each and every task on your mind. Whatever it is that you need help with, we can provide it.',
    widget: Task

},
{
    heading: ' Refund policy',
    text: 'Have peace of mind knowing that our online writing services offer refunds. It is quite unlikely that you ll need to request one as our satisfaction rate is 98%.',
    widget: Policy

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
                            <Col lg={4} md={6} sm={12}>
                                <div className="student">
                                    <div className="student_widget">
                                        {item.widget}
                                    </div>

                                    <h3 className="pricing">
                                        {item.heading}
                                    </h3>
                                    <p className="student_service">
                                        {item.text}                 </p>
                                </div>
                            </Col>
                        )

                    })}

                </Row>
                <div className="main_hire_btn">
                    <button className="hire_btn">Hire essay writer</button>
                </div>            </Container>
        </div>
    )
}
export default Services