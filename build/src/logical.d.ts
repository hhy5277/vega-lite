export declare type LogicalOperand<T> = LogicalNot<T> | LogicalAnd<T> | LogicalOr<T> | T;
export interface LogicalOr<T> {
    or: LogicalOperand<T>[];
}
export interface LogicalAnd<T> {
    and: LogicalOperand<T>[];
}
export interface LogicalNot<T> {
    not: LogicalOperand<T>;
}
export declare function isLogicalOr(op: LogicalOperand<any>): op is LogicalOr<any>;
export declare function isLogicalAnd(op: LogicalOperand<any>): op is LogicalAnd<any>;
export declare function isLogicalNot(op: LogicalOperand<any>): op is LogicalNot<any>;