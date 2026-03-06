import React from "react";
import './Policies.css';

const RefundPolicy = () => {
    return (
        <div className="policy-page">
            <div className="policy-container">
                <h1 className="policy-title">Refund Policy – Gyantrix</h1>

                <div className="policy-section">
                    <h2>Information Collection</h2>
                    <p>
                        Gyantrix collects information in several ways. When you register for
                        a course with us, we may request contact details such as your name,
                        address, phone number, and email address, along with billing
                        information. We may also collect additional details through forms or
                        surveys regarding your academic background, profession, business,
                        job role, and opinions. Any correspondence (letters, emails, or
                        messages) sent to us by you or third parties may also be maintained
                        in your student file.
                    </p>
                </div>

                <div className="policy-section">
                    <h2>Refund & Cancellation Policy</h2>
                    <div className="policy-sub-section">
                        <h3>Pre-Registration Amount (₹1,000/-)</h3>
                        <p>Non-refundable under any circumstances.</p>
                    </div>

                    <div className="policy-sub-section">
                        <h3>Full Fees</h3>
                        <p>
                            A refund request will be considered only before the commencement
                            of the batch and must be submitted within 24 hours after
                            pre-registration for which the student is registered. Refund
                            applications must be addressed in writing to the Program
                            Director.
                        </p>
                    </div>

                    <p><strong>Important Note:</strong> Fees once paid are non-refundable under any other circumstances.</p>
                </div>

                <div className="policy-section">
                    <h2>Payment Policy</h2>
                    <ul>
                        <li>Fees can be paid via Cheque, Demand Draft, ECS, Credit/Debit Card, UPI, Crypto, PayPal, Zest, Bajaj Fin, or GrayQuest.</li>
                        <li>Cash payments are not accepted.</li>
                        <li>Admission will be confirmed only upon receipt of the requisite fee.</li>
                        <li>Students may choose between Lump Sum payment or Loan/Installment options through our authorized payment partners.</li>
                        <li>In case of a study break due to unavoidable circumstances, students may request deferment by contacting their Student Success Manager (SSM).</li>
                        <li><strong>Late Payment Penalty:</strong> A fee of ₹500/- will be charged per instance of delay.</li>
                        <li>Non-payment or delay exceeding 15 days, or a bounced cheque, will lead to cancellation of admission at Gyantrix’s sole discretion without prior notice.</li>
                        <li>All required documents and KYC must be submitted at the time of admission.</li>
                    </ul>
                </div>

                <div className="policy-section">
                    <h2>Price Changes</h2>
                    <p>
                        Gyantrix reserves the right to modify, amend, or discontinue fees and
                        features associated with its courses or services. Any changes will
                        be communicated at least 15 days in advance. Continued usage of
                        Gyantrix’s online or blended learning programs after notification
                        will be deemed as acceptance of the revised terms. If you do not
                        agree to the revised terms, you may cancel your subscription.
                    </p>
                </div>

                <div className="policy-section">
                    <h2>Taxes</h2>
                    <p>
                        All applicable taxes (including GST/VAT, where applicable) will be
                        charged in addition to the course fee. Taxes are calculated based on
                        the billing information you provide at the time of purchase. You
                        agree to indemnify and hold Gyantrix harmless against any claims
                        arising from underpayment of taxes, including penalties and interest.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RefundPolicy;
