const cds = require("@sap/cds");

module.exports = (srv => {
    let { Employees, Modules } = srv.entities;

    srv.on("READ", Modules, async (req, next) => {
        let employeemgmt = await cds.connect.to("employeemgmt");
        return await employeemgmt.run(SELECT.from(Modules));
    });

    srv.on("READ", Employees, async (req, next) => {
        let employeemgmt = await cds.connect.to("employeemgmt");
        let tx = employeemgmt.tx(req);
        try {
            let sQuery = `SELECT EMP_ID,EMP_NAME,EMP_SALARY,EMP_IMG,URL,MODULE_ID FROM ${Employees}`;
            let employeeTable = await tx.run(Employees);
            // return employeeTable
            console.log(employeeTable);
        } catch (error) {
            console.log(error);
        }
        // return await employeemgmt.run(SELECT.from(Employees));
    });

    // srv.before("CREATE", EMPLOYEE, async (req) => {
    //     let db = await cds.connect.to('db');
    //     let tx = db.tx(req);
    //     try {
    //         let sQuery = `SELECT MAX(EMP_ID) AS COUNT FROM ${EMPLOYEE}`;
    //         let employeeTable = await tx.run(sQuery);
    //         employeeTable[0].COUNT = employeeTable[0].COUNT + 1;
    //         req.data.EMP_ID = employeeTable[0].COUNT;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // });
})