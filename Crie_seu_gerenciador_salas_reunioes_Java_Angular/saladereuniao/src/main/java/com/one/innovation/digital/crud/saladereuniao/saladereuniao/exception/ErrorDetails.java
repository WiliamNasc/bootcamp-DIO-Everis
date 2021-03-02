package com.one.innovation.digital.crud.saladereuniao.saladereuniao.exception;

import java.util.Date;

public class ErrorDetails {

    public ErrorDetails(Date timestamp, String message, String details) {
        super();
        this.timestamp = timestamp;
        this.message = message;
        this.details = details;
    }

    public Date getTimestamp() {
        return timestamp;
    }

    public String getMessage() {
        return message;
    }

    public String getDetails() {
        return details;
    }

    private Date timestamp;
    private String message;
    private String details;
}