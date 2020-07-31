import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class PersonalizeRuntime extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: PersonalizeRuntime.Types.ClientConfiguration)
  config: Config & PersonalizeRuntime.Types.ClientConfiguration;
  /**
   * Re-ranks a list of recommended items for the given user. The first item in the list is deemed the most likely item to be of interest to the user.  The solution backing the campaign must have been created using a recipe of type PERSONALIZED_RANKING. 
   */
  getPersonalizedRanking(params: PersonalizeRuntime.Types.GetPersonalizedRankingRequest, callback?: (err: AWSError, data: PersonalizeRuntime.Types.GetPersonalizedRankingResponse) => void): Request<PersonalizeRuntime.Types.GetPersonalizedRankingResponse, AWSError>;
  /**
   * Re-ranks a list of recommended items for the given user. The first item in the list is deemed the most likely item to be of interest to the user.  The solution backing the campaign must have been created using a recipe of type PERSONALIZED_RANKING. 
   */
  getPersonalizedRanking(callback?: (err: AWSError, data: PersonalizeRuntime.Types.GetPersonalizedRankingResponse) => void): Request<PersonalizeRuntime.Types.GetPersonalizedRankingResponse, AWSError>;
  /**
   * Returns a list of recommended items. The required input depends on the recipe type used to create the solution backing the campaign, as follows:   RELATED_ITEMS - itemId required, userId not used   USER_PERSONALIZATION - itemId optional, userId required    Campaigns that are backed by a solution created using a recipe of type PERSONALIZED_RANKING use the API. 
   */
  getRecommendations(params: PersonalizeRuntime.Types.GetRecommendationsRequest, callback?: (err: AWSError, data: PersonalizeRuntime.Types.GetRecommendationsResponse) => void): Request<PersonalizeRuntime.Types.GetRecommendationsResponse, AWSError>;
  /**
   * Returns a list of recommended items. The required input depends on the recipe type used to create the solution backing the campaign, as follows:   RELATED_ITEMS - itemId required, userId not used   USER_PERSONALIZATION - itemId optional, userId required    Campaigns that are backed by a solution created using a recipe of type PERSONALIZED_RANKING use the API. 
   */
  getRecommendations(callback?: (err: AWSError, data: PersonalizeRuntime.Types.GetRecommendationsResponse) => void): Request<PersonalizeRuntime.Types.GetRecommendationsResponse, AWSError>;
}
declare namespace PersonalizeRuntime {
  export type Arn = string;
  export type AttributeName = string;
  export type AttributeValue = string;
  export type Context = {[key: string]: AttributeValue};
  export interface GetPersonalizedRankingRequest {
    /**
     * The Amazon Resource Name (ARN) of the campaign to use for generating the personalized ranking.
     */
    campaignArn: Arn;
    /**
     * A list of items (by itemId) to rank. If an item was not included in the training dataset, the item is appended to the end of the reranked list. The maximum is 500.
     */
    inputList: InputList;
    /**
     * The user for which you want the campaign to provide a personalized ranking.
     */
    userId: UserID;
    /**
     * The contextual metadata to use when getting recommendations. Contextual metadata includes any interaction information that might be relevant when getting a user's recommendations, such as the user's current location or device type.
     */
    context?: Context;
    /**
     * The Amazon Resource Name (ARN) of a filter you created to include or exclude items from recommendations for a given user.
     */
    filterArn?: Arn;
  }
  export interface GetPersonalizedRankingResponse {
    /**
     * A list of items in order of most likely interest to the user. The maximum is 500.
     */
    personalizedRanking?: ItemList;
  }
  export interface GetRecommendationsRequest {
    /**
     * The Amazon Resource Name (ARN) of the campaign to use for getting recommendations.
     */
    campaignArn: Arn;
    /**
     * The item ID to provide recommendations for. Required for RELATED_ITEMS recipe type.
     */
    itemId?: ItemID;
    /**
     * The user ID to provide recommendations for. Required for USER_PERSONALIZATION recipe type.
     */
    userId?: UserID;
    /**
     * The number of results to return. The default is 25. The maximum is 500.
     */
    numResults?: NumResults;
    /**
     * The contextual metadata to use when getting recommendations. Contextual metadata includes any interaction information that might be relevant when getting a user's recommendations, such as the user's current location or device type.
     */
    context?: Context;
    /**
     * The ARN of the filter to apply to the returned recommendations. For more information, see Using Filters with Amazon Personalize. When using this parameter, be sure the filter resource is ACTIVE.
     */
    filterArn?: Arn;
  }
  export interface GetRecommendationsResponse {
    /**
     * A list of recommendations sorted in ascending order by prediction score. There can be a maximum of 500 items in the list.
     */
    itemList?: ItemList;
  }
  export type InputList = ItemID[];
  export type ItemID = string;
  export type ItemList = PredictedItem[];
  export type NumResults = number;
  export interface PredictedItem {
    /**
     * The recommended item ID.
     */
    itemId?: ItemID;
    /**
     * A numeric representation of the model's certainty that the item will be the next user selection. For more information on scoring logic, see how-scores-work.
     */
    score?: Score;
  }
  export type Score = number;
  export type UserID = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-05-22"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the PersonalizeRuntime client.
   */
  export import Types = PersonalizeRuntime;
}
export = PersonalizeRuntime;
