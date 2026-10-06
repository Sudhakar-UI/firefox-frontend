"use client";
import React from "react";
import { Alert, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const MerchantCreatedAlert = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        backgroundColor: "#f8f9fa",
      }}
    >
      <Card
        className="shadow border-0"
        style={{
          width: "420px",
          borderRadius: "15px",
        }}
      >
        {/* Success message */}
        <Alert
          variant="success"
          className="text-center mb-0"
          style={{
            backgroundColor: "#E8FBF0",
            color: "#0B7B3E",
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px",
            borderBottom: "none",
          }}
        >
          <h6 className="fw-bold mb-1">Congratulations!</h6>
          <p className="mb-0 text-dark">
            You have created a new merchant <b>"sdfsdf"</b>
          </p>
        </Alert>

        {/* Alert body content */}
        <div className="px-4 py-3">
          <div className="mb-3">
            <h6 className=" mb-1">Pass project moderation</h6>
            <p className="text-muted small mb-0">
              Get the API key. Create one-time payment links and post them
              anywhere or send them to each of your customers. You can also use
              the widget on your website.
            </p>
          </div>

          <div>
            <h6 className=" mb-1">Integrate Heleket via API</h6>
            <p className="text-muted small mb-0">
              Automatically generate a payment directly on your website for your
              customers to see.
            </p>
          </div>
        </div>

        {/* Footer button */}
        <div className="px-4 pb-4">
          <Button
            className="w-100 fw-semibold py-2"
            style={{
              backgroundColor: "#E53935",
              border: "none",
              borderRadius: "25px",
            }}
          >
            Go to setup
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default MerchantCreatedAlert;
