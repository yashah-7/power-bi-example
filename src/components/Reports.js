import React,{useState, useEffect} from "react";
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

const Reports = ()=>{

    // const [displayMessage, setMessage] = useState(`The report is bootstrapped. Click the Embed Report button to set the access token`);

	// API end-point url to get embed config for a sample report
	const sampleReportUrl = 'https://playgroundbe-bck-1.azurewebsites.net/Reports/SampleReport';

	// Report config useState hook
	// Values for properties like embedUrl, accessToken and settings will be set on click of buttons below
	const [sampleReportConfig, setReportConfig] = useState({
		type: 'report',
		embedUrl: undefined,
		tokenType: models.TokenType.Embed,
		accessToken: undefined,
		settings: { 
            panes: {
                filters: {
                    expanded: false,
                    visible: true
                }
            },
			background: models.BackgroundType.Transparent,
        }
	});

    // Map of event handlers to be applied to the embedding report
	const eventHandlersMap = new Map([
		['loaded', function () {
			console.log('Report has loaded');
		}],
		['rendered', function () {
			console.log('Report has rendered');
			
			// Update display message
			// setMessage('The report is rendered')
		}],
		['error', function (event) { 
			if (event) {
				console.error('error',event.detail);
			}
		}]
	]);

    // Fetch sample report's config (eg. embedUrl and AccessToken) for embedding
	const mockSignIn = async () => {

		// Fetch sample report's embed config
		const reportConfigResponse = await fetch(sampleReportUrl);
		
		if (!reportConfigResponse.ok) {
			console.error(`Failed to fetch config for report. Status: ${ reportConfigResponse.status } ${ reportConfigResponse.statusText }`);
			return;
		}

		const reportConfig = await reportConfigResponse.json();

		// Update display message
		// setMessage('The access token is successfully set. Loading the Power BI report')

		// Set the fetched embedUrl and embedToken in the report config
		setReportConfig({
			...sampleReportConfig,
			embedUrl: reportConfig.EmbedUrl,
			accessToken: reportConfig.EmbedToken.Token
		});
	};

    useEffect(()=>{
        mockSignIn();
    },[]);


    return(
        <div className="container">
			<div className="row">
				<div className="col-12">
					<h1 className="page-title">Report Name</h1>
					<PowerBIEmbed
						embedConfig = {sampleReportConfig}

						eventHandlers = {eventHandlersMap}
							
						cssClassName = { "report-style-class" }

						getEmbeddedComponent = { (embeddedReport) => {
							window.report = embeddedReport;
						}}
					/>

					{/* <div className = "displayMessage">
						{ displayMessage }
					</div> */}
				</div>
			</div>
        </div>
    )
}

export default Reports;