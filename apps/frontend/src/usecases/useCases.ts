
      
          import {
            IUserUseCase, UserUseCase,
IBuildingUseCase, BuildingUseCase,
IMaintenanceRecordUseCase, MaintenanceRecordUseCase,
IEquipmentUseCase, EquipmentUseCase,
IPermitUseCase, PermitUseCase,
IImprovementUseCase, ImprovementUseCase,
IAirQualityUseCase, AirQualityUseCase,
IEnvironmentalDataUseCase, EnvironmentalDataUseCase,
IEnergyEfficiencyUseCase, EnergyEfficiencyUseCase,
IComplianceRecordUseCase, ComplianceRecordUseCase,
ICertificationUseCase, CertificationUseCase,
IDocumentUseCase, DocumentUseCase,
ISubscriptionsAppUseCase, SubscriptionsAppUseCase,
IWorkOrderUseCase, WorkOrderUseCase,
INotificationUseCase, NotificationUseCase,
IReportUseCase, ReportUseCase,
ISearchCriteriaUseCase, SearchCriteriaUseCase
          } from '@buildtrack/core';

          export interface IUseCases {
            User: IUserUseCase;
Building: IBuildingUseCase;
MaintenanceRecord: IMaintenanceRecordUseCase;
Equipment: IEquipmentUseCase;
Permit: IPermitUseCase;
Improvement: IImprovementUseCase;
AirQuality: IAirQualityUseCase;
EnvironmentalData: IEnvironmentalDataUseCase;
EnergyEfficiency: IEnergyEfficiencyUseCase;
ComplianceRecord: IComplianceRecordUseCase;
Certification: ICertificationUseCase;
Document: IDocumentUseCase;
SubscriptionsApp: ISubscriptionsAppUseCase;
WorkOrder: IWorkOrderUseCase;
Notification: INotificationUseCase;
Report: IReportUseCase;
SearchCriteria: ISearchCriteriaUseCase;
          }

          export const UseCases: IUseCases = {
            User: new UserUseCase(),
Building: new BuildingUseCase(),
MaintenanceRecord: new MaintenanceRecordUseCase(),
Equipment: new EquipmentUseCase(),
Permit: new PermitUseCase(),
Improvement: new ImprovementUseCase(),
AirQuality: new AirQualityUseCase(),
EnvironmentalData: new EnvironmentalDataUseCase(),
EnergyEfficiency: new EnergyEfficiencyUseCase(),
ComplianceRecord: new ComplianceRecordUseCase(),
Certification: new CertificationUseCase(),
Document: new DocumentUseCase(),
SubscriptionsApp: new SubscriptionsAppUseCase(),
WorkOrder: new WorkOrderUseCase(),
Notification: new NotificationUseCase(),
Report: new ReportUseCase(),
SearchCriteria: new SearchCriteriaUseCase(),
          };
        
      