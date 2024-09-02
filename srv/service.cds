namespace empmgmt.srv.service;

using { empmgmt.db.schema as db } from '../db/schema';

service empmgmt {
    entity Employees as projection on db.EMPLOYEE;
    entity Modules as projection on db.MODULE;
}


