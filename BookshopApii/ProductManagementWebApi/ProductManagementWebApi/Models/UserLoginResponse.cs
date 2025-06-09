namespace ProductManagementWebApi.Models
{
    public class UserLoginResponse: User
    {
        public bool AuthenticateResult { get; set; }
        public string AuthToken { get; set; }

        public DateTime AccessTokenExpireDate { get; set; }


    }
}
