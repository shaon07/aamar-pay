import { Col, Row } from "antd";
import SelectBox from "../../components/selectBox";
import Table from "../../components/table";
import { selectBoxOptions } from "../../resources/static/homepage";
import useIssue from "../../resources/useIssue";
import { globalStyles } from "../../styles/tailwind/globalStyles/index.css";

export default function HomepageViewLayer() {
    const { handleFilterState } = useIssue();

    return (
        <div className={`${globalStyles.container} mx-auto`}>
            <Row>
                <Col xs={24}>
                    <div className="flex flex-col gap-2">
                        <div className="max-w-52">
                            <SelectBox onChange={(data) => { handleFilterState(data) }} options={selectBoxOptions} label="Select an option" />
                        </div>

                        <Table />
                    </div>
                </Col>
            </Row>
        </div>
    )
}
