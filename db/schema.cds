namespace empmgmt.db.schema;
using { employeemgmt } from '../srv/external/employeemgmt.csn';

using {managed} from '@sap/cds/common';


entity EMPLOYEE : managed {
    key EMP_ID      : Integer;
        EMP_NAME    : String;
        EMP_AGE     : String;
        EMP_MODULE  : String;
        EMP_COUNTRY : String;
        EMP_CITY    : String;
};

// entity EMPLOYEE as projection on employeemgmt.Employees{
//     key EMP_ID as EMP_ID,
//         EMP_NAME as EMP_NAME,
//         EMP_SALARY as EMP_SALARY,
//         MODULE as MODULE_ID,
//         blob as EMP_IMG,
//         IMG_URL as URL
// };

entity MODULE as projection on employeemgmt.Modules{
    key MODULE_ID as MODULE_ID,
        MODULE_NAME as MODULE_NAME
};


