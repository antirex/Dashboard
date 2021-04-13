import { Row } from 'react-bootstrap';
import JobDesc from './JobDesc';
import Updatedesc from './Updatedesc';

const DownCard = () => {
    const listObej = [
        {
            id: 1,
            desig: 'SalesManager_Strasbourg_LinkedinSearch_0221',
            name: 'Andrea',
            date: '4 Feb 2021',
            leads: 1123
        },
        {
            id: 2,
            desig: 'SalesManager_Denbirurg_LinkedinSearch_0221',
            name: 'Anhil',
            date: '19 Mar 2021',
            leads: 1003
        },
        {
            id: 3,
            desig: 'SalesManager_Indiadadasrg_Linkedarch_02q121',
            name: 'Shreeya',
            date: '22 Apr 2021',
            leads: 13203
        }
    ]
    const updateList = [
        {
            id: 1,
            msg: 'Phantom stopped unexpectedly',
            out: 'View details',
            logo: 'WarningIcon',
            color: '#EB5757'
        },
        {
            id: 2,
            msg: 'Your plan will expire soon, recharge soon',
            out: 'Recharge now',
            logo: 'WarningIcon',
            color: '#F2994A'
        },
        {
            id: 5,
            msg: 'Phantom stopped unexpectedly',
            out: 'Recharge now',
            logo: 'CheckCircleSharpIcon',
            color: '#6FCF97'
        },
        {
            id: 3,
            msg: 'Phantom stopped unexpectedly',
            out: 'View details',
            logo: 'WarningIcon',
            color: '#EB5757'
        },
        {
            id: 4,
            msg: 'Phantom stopped unexpectedly',
            out: 'View details',
            logo: 'WarningIcon',
            color: '#EB5757'
        }
    ]
    return (
        <div className="dispProp">
            <Row>
                <JobDesc lists={listObej} />
                <Updatedesc update={updateList} />
            </Row>
        </div>
    )
}

export default DownCard;