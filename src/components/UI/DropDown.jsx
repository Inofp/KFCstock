import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';

const MyDropDown = ({children}) => {
    return (
        <MDBDropdown>
        <MDBDropdownToggle tag='a' className='btn btn-dark btn-lg dropdown-toggle' color='dark'>
            {children}
        </MDBDropdownToggle>
        <MDBDropdownMenu>
            <MDBDropdownItem link>Жаровни</MDBDropdownItem>
            <MDBDropdownItem link>Комбо-машина</MDBDropdownItem>
            <MDBDropdownItem link>Кухонное оборудование</MDBDropdownItem>
            <MDBDropdownItem link>Униформа</MDBDropdownItem>
        </MDBDropdownMenu>
    </MDBDropdown>
    )
}

export default MyDropDown;