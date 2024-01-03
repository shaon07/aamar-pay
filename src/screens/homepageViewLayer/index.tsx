import { Col, Row } from "antd";
import SelectBox from "../../components/selectBox";
import Table from "../../components/table";
import { globalStyles } from "../../styles/tailwind/globalStyles/index.css";

export default function HomepageViewLayer() {
    return (
        <div className={`${globalStyles.container} mx-auto`}>
            <Row>
                <Col xs={24}>
                    <h1>Homepage</h1>
                    <div className="shadow-md flex flex-col gap-2">
                        <div className="max-w-52">
                            <SelectBox />
                        </div>
                        <Table />
                    </div>
                </Col>
            </Row>
        </div>
    )
}
